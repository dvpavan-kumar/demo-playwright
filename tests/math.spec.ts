import {test,expect} from '@playwright/test';

test('Math works',async ()=>{
    const a=1;
    const b=2;
    const sum =a+b;
    expect(sum).toBe(3)
})