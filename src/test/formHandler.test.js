import { TestScheduler } from 'jest'
import {handleSubmit} from '../src/client/js/formHandler'

describe("testing the submit functionality",() => {
    test("it should return true", async()=>{
        expect(handleSubmit).toBeDefined();
    });

});


describe("testing the handleSubmit() functionality",() => {
    test("it should be a function", async()=>{
        expect(typeof handleSubmit).toBe("function");
    });

});