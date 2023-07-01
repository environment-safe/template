/* global describe:false, it:false */
import { chai } from 'environment-safe-chai';
import { } from '../src/index.mjs';

const semverRegex = /^((([0-9]+)\.([0-9]+)\.([0-9]+)(?:-([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?)(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?)$/g;
const validSemver = (value='')=>{
    return  (
        value
    ).match(semverRegex) && value;
};
const should = chai.should();

describe('module', ()=>{
    describe('performs a simple test suite', ()=>{
        it('loads', async ()=>{
            
        });
    });
});
