import styled from 'styled-components';
import { Select } from './components/Select';

function App() {
    return (
        <Container>
            <h1>Hi</h1>
            <Select />
        </Container>
    )
}

export default App

const Container = styled.div`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
`;