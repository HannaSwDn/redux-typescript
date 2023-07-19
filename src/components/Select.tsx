import { useState } from 'react';
import styled from 'styled-components';

type SelectOptions = {
    label: string;
    value: number;
};

type SelectProps = {
    value?: SelectOptions;
    onChange: (value: SelectOptions | undefined) => void;
    options: SelectOptions[];
};

export const Select = ({ value, onChange, options }: SelectProps) => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <Container tabIndex={0} onBlur={() => setIsOpen(false)}>
            <Value>{value?.label}</Value>
            <Button>X</Button>
            <Divider></Divider>
            <Caret onClick={() => setIsOpen(!isOpen)}></Caret>

            {isOpen && (
                <Options>
                    {options.map(option => {
                        return <Option key={option.value}>{option.label}</Option>
                    })}
                </Options>
            )}
        </Container>
    )
};

const Container = styled.div`
    position: relative;
    width: 20em;
    min-height: 1.5em;
    border: .05em solid #777;
    display: flex;
    align-items: center;
    gap: .5em;
    padding: .5em;
    border-radius: .25em;
    outline: none;

    &:focus {
        border-color: green;
    }
`;

const Value = styled.span`
    flex-grow: 1;
    display: flex;
    gap: .5em;
    flex-wrap: wrap;
`;

const Button = styled.button`
    background: none;
    color: #777;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 0;
    font-size: 1.25em;

    &:focus, &:hover {
        color: #333;
    }
`;

const Divider = styled.div`
    background-color: #777;
    align-self: stretch;
    width: .05em;
`;

const Caret = styled.div`
    translate: 0 25%;
    border: .25em solid transparent;
    border-top-color: #777;
`;

const Options = styled.ul`
    position: absolute;
    margin: 0;
    padding: 0;
    list-style: none;
    max-height: 15em;
    overflow-y: auto;
    border: .05em solid #777;
    border-radius: .25em;
    width: 100%;
    left: 0;
    top: calc(100% + .25em);
    background-color: white;
    z-index: 100;
`;

const Option = styled.li`
    padding: .25em .5em;
    cursor: pointer;
`;