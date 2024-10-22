// Copyright 2024, University of Colorado Boulder
// @author Michael Kauzmann

import phetLibraryEslintConfig from '../perennial-alias/js/eslint/phet-library.eslint.config.mjs';

export default [
  ...phetLibraryEslintConfig,
  {
    ignores: [
      '**/**'
    ]
  }
];