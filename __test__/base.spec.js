/**
 * @jest-environment jsdom
 */
import {isValidURL, updateUI, handleSubmit, buildTable } from "../src/client/js/base.js";

describe('should properly test valid Urls', function(){
    it('good input', function () {
        let input = 'https://msmestoday.com', output = true;
        expect(isValidURL(input)).toBeTruthy();
    });

    it('bad input', function () {
        let input = ['https://msmestoday.c/', 'https://.msmestoday.com/'], output = false;
        input.forEach(item => expect(isValidURL(item)).toBeFalsy())
    });
})

describe('should properly build the UI', function (){
    let input = {'col1': 'Column1', 'col2': 'Column2', },
        output = `<table><thead><tr><th>col1</th><th>col2</th></tr></thead><tbody><tr><td>Column1</td><td>Column2</td></tr></tbody></table>`;
    it('checks that buildTable is defined', () => {
        expect(buildTable(input)).toBe(output);
    })
})

describe('should properly update the UI', function (){
    it('checks that updateUI is defined', () => {
        expect(updateUI).toBeDefined()
    })
})

describe('should properly handle form submission', function (){
    it('checks that handleSubmit is defined', () => {
        expect(handleSubmit).toBeDefined()
    })
})

