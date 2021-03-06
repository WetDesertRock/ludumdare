import {h, Component}					from 'preact/preact';
import ContentError						from 'com/content-error/error';

export default class PageError extends Component {
    render( props ) {
        return (
            <div id="content">
                <ContentError {...props} />
            </div>
        );
    }
}
