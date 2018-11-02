// Core
import merge from 'webpack-merge';

// Instruments
import { SOURCE } from '../constants';
import getCommonConfig from './webpack.common';
import { cleanBuildDirectory, connectBuildAnalysis } from '../modules';

export default () => {
    return merge(
        getCommonConfig(),
        {
            mode:    'production', // временно
            entry:   SOURCE,
            devtool: false,
        },
        cleanBuildDirectory(),
        connectBuildAnalysis(),
    );
};
