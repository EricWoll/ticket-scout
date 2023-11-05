import styled from 'styled-components';
import { CssColors, CssSizes } from '../../constants/styles.constants';

export const NoEvents = styled.h2`
    margin-top: 0.5em;
    margin-bottom: 0.5em;
    font-size: ${CssSizes['notifiction-desktop-font-size']};
    color: ${CssColors['no-search-events-color']};
    user-select: none;
    text-align: center;
`;
