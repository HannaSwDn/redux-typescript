import styled from 'styled-components';
import { Select } from './components/Select';
import { options } from './data/options';
import { useState } from 'react';

function App() {
    const [value, setValue] = useState<typeof options[0] | undefined>(options[0]);
    
    return (
        <Container>
            <h1>Hi</h1>
            <Select options={options} value={value} onChange={option => setValue(option)} />
        </Container>
    )
}

export default App

const Container = styled.div`
    
`;