// import { describe,expect,test } from "vitest";
import { expect } from 'vitest'
import Main from './src/pages/mainView.jsx'
import {render,screen} from '@testing-library/react'
describe('mainView',()=>{
    test('should be 2',()=>{
       render(<Main></Main>)
       expect(screen.getByText("CATEGORIAS")).toBeDefined()
    })
})
