import { render, screen } from "@testing-library/react"
import Application from "./Application"

describe("Application", ()=>{
    test("renders correctly", ()=>{
    render(<Application/>);
    const pageHeading = screen.getByRole('heading', {
        level: 1,
    });
    expect(pageHeading).toBeInTheDocument();
    const sectionHeading = screen.getByRole('heading', {
        level: 2,
    });
    expect(sectionHeading).toBeInTheDocument();
    const nameElement = screen.getByRole('textbox',{
        name: 'Name',
    });
    expect(nameElement).toBeInTheDocument();
    const genderElement = screen.getByRole('textbox', {
        name: 'Gender',
    });
    expect(genderElement).toBeInTheDocument();
    const jobLocationElement = screen.getByRole('combobox');
    expect(jobLocationElement).toBeInTheDocument();
    const termsElement = screen.getByRole('checkbox');
    expect(termsElement).toBeInTheDocument();
    const submitButtonElement = screen.getByRole('button');
    expect(submitButtonElement).toBeInTheDocument();
    })
})