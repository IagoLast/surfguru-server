const puppeteer = require('puppeteer');


/** 
 * Scrap the beach with the given ID returing a array containing {@link Prediction} objects.
 *
 * @param {string} id - The ID of the beach to be scrapped.
 * @return {Promise<Prediction[]>} An array containing the availiable predictions for the given beach.
 */
async function scrap(id) {
    var browser;
    if (!id) {
        throw new Error('Missing Location ID');
    }
    try {
        console.debug('Start scraper');
        browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
        console.debug('Browser launched');
        const page = await browser.newPage();
        console.debug('Page opened');
        await page.goto(`https://www.windguru.cz/${id}`, { waitUntil: 'networkidle' });
        console.debug('Page loaded');
        return await page.evaluate(_getData);
    }
    catch (e) {
        console.error(e);
        throw new Error(e);
    } finally {
        if (browser) {
            browser.close();
        }
    }
}

function _getData() {
    const data = [];
    const table = document.querySelector('#tabid_0_content_div .tabulka tbody');

    const dates = _getNumericData(table, '#tabid_0_0_dates');
    const waveHeight = _getNumericData(table, '#tabid_0_0_HTSGW');
    const waveDirection = _getDirectionalData(table, '#tabid_0_0_DIRPW');
    const windSpeed = _getNumericData(table, '#tabid_0_0_WINDSPD');
    const windDirection = _getDirectionalData(table, '#tabid_0_0_SMER');

    for (let index = 0; index < dates.length; index++) {
        data.push({ d: dates[index], wah: waveHeight[index], wad: waveDirection[index], wis: windSpeed[index], wid: windDirection[index] });
    }

    return data;

    // Since this funcion is evaluated in the browser context we need to define the utilitiy functions here.

    function _getNumericData(table, selector) {
        const element = table.querySelector(selector);
        const data = [];
        element.childNodes.forEach(node => data.push(node.textContent));
        return data;
    }

    function _getDirectionalData(table, selector) {
        const element = table.querySelector(selector);
        const data = [];
        element.childNodes.forEach(node => {
            const title = node.querySelector('span') && node.querySelector('span').title;
            if (title) {
                data.push(title.match(/\d+/)[0]);
            }
        });
        return data;
    }
}

/**
 *  Contains a surf forecast for a date.
 *  @typedef {Object} Prediction
 *  @property {string} date - The date of the prediction
 *  @property {number} wah - The predicted wave height in meters.
 *  @property {number} wad - The wave direction in degrees. (S 0º) (W 90º) (N 180º) (E 270º)
 *  @property {number} wis - The wind speed in knots.
 *  @property {number} wid - The wind direction. (S 0º) (W 90º) (N 180º) (E 270º)
 */
module.exports = scrap;