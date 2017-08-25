import * as React from 'react';
import './Hello.css';
import pathxml from './Path.svg.xml';

interface Props {

}
interface Ctx {
    hightLight: boolean;
}

export class MySvg extends React.Component<Props, Ctx> {
    constructor() {
        super();
        this.state = {
            hightLight: false
        };
    }
    // onMouseOut={this.onMouseOut.bind(this)} onMouseOver={this.onMouseOver.bind(this)}
    render() {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 841.9 595.3">
                <g fill={this.state.hightLight ? '#ba87fb' : '#61DAFB'}>
                    {pathxml}
                    <circle cx="420.9" cy="296.5" r="45.7"/>
                    <path d="M520.5 78.1z"/>
                </g>
            </svg>);
    }

    private onMouseOut() {
        this.setState({
            hightLight: false,
        });
    }

    private onMouseOver() {
        this.setState({
            hightLight: true,
        });
    }
}