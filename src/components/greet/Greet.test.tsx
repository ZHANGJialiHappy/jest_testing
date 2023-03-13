import { render, screen } from "@testing-library/react"
import Greet from "./Greet"

describe('Greet', ()=>{
    test('Render correctly', ()=>{
        render(<Greet/>)
        const textElement = screen.getByText(/Hi/i)
        expect(textElement).toBeInTheDocument()
    });
    
    test('Render name', () => {
        render(<Greet name="Mona" />)
        const textElement = screen.getByText(/HI, MONA/i)
        expect(textElement).toBeInTheDocument()
    })
})
