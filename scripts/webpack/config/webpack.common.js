// Core
import merge from 'webpack-merge';

// Instruments
import { BUILD } from '../constants';
import {
    loadJavaScript,
    loadCss,
    loadFonts,
    connectHtml,
    loadImages,
    loadSvg,
    defineEnvVariables,
} from '../modules';

export default () => {
    return merge(
        {
            output: {
                path:     BUILD,
                filename: './js/bundle.js',
            },
        },
        connectHtml(),
        loadJavaScript(),
        loadCss(),
        loadFonts(),
        loadImages(),
        loadSvg(),
        defineEnvVariables({
            TWO: '1 + 1',
            API_URL: 'https://ww....',

        }),
    );
};
