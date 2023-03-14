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

    const paragraphElement = screen.getByText('please fill them out');
    expect(paragraphElement).toBeInTheDocument();

    const customElement = screen.getByTestId('custom-element');
    expect(customElement).toBeInTheDocument();
    // 有啥用？

    const nameElement = screen.getByRole('textbox',{
        name: 'Name',
    });    
    expect(nameElement).toBeInTheDocument();

    const nameElement2 = screen.getByLabelText('Name', {
        selector: 'input',
    });
    expect(nameElement2).toBeInTheDocument();

    const nameElement3 = screen.getByPlaceholderText('Fullname')
    expect(nameElement3).toBeInTheDocument();
// if there are several placeholder with fullname?

    const nameElement4 = screen.getByDisplayValue('Jiali')
    expect(nameElement4).toBeInTheDocument();

    const genderElement = screen.getByRole('textbox', {
        name: 'Gender',
    });
    expect(genderElement).toBeInTheDocument();

    const jobLocationElement = screen.getByRole('combobox');
    expect(jobLocationElement).toBeInTheDocument();

    const termsElement = screen.getByRole('checkbox');
    expect(termsElement).toBeInTheDocument();

    const termsElement2 = screen.getByLabelText(
    'I agree to the terms and conditions');
    expect(termsElement2).toBeInTheDocument();

    const submitButtonElement = screen.getByRole('button');
    expect(submitButtonElement).toBeInTheDocument();
    })
})