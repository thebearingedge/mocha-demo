import { describe, it } from 'global'
import { expect } from 'chai'
import foo from '../src'
import { bar } from '../src'

describe('myFoo', () => {

  it('is a function', () => {
    expect(foo).to.be.a('function')
  })

})

describe('myBar', () => {
  it('is a var', ()=>{
    expect(bar).to.be.a('number');
  })
})
