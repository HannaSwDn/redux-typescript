import styled from 'styled-components';

type SelectOptions = {
    label: string;
    value: string;
};

type SelectProps = {
    value?: SelectOptions;
    onChange: (value: SelectOptions | undefined) => void;
    options: SelectOptions[];
};

export const Select = ({ value, onChange, options }: SelectProps) => {
    return (
        <Container>
            <p>Select component</p>
        </Container>
    )
};

const Container = styled.div``;