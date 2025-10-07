// Copyright 2024, University of Colorado Boulder
// @author Michael Kauzmann

import strictBooleanExpressionsConfig from '../perennial-alias/js/eslint/config/util/strictBooleanExpressionsConfig.mjs';
import phetLibraryEslintConfig from '../perennial-alias/js/eslint/config/phet-library.eslint.config.mjs';

export default [
  ...phetLibraryEslintConfig,
  ...strictBooleanExpressionsConfig,
  {
    ignores: [
      '**/**'
    ]
  }
];
