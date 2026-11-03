import {test} from 'node:test';
import {strict as assert} from 'node:assert';
import {validateRequest} from '../src/reservations.js';
const table={id:'T2',capacity:4};
test('accepts a synthetic request within table capacity',()=>{
 assert.deepEqual(validateRequest({guestRef:'GUEST-DEMO-001',date:'2026-11-10',time:'19:30',partySize:3},table),{ok:true,tableId:'T2'});
});
test('rejects requests exceeding capacity',()=>{
 assert.deepEqual(validateRequest({guestRef:'GUEST-DEMO-002',date:'2026-11-10',time:'19:30',partySize:5},table),{ok:false,reason:'CAPACITY_EXCEEDED'});
});
