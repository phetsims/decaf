// Copyright 2024, University of Colorado Boulder
// @author Michael Kauzmann

import phetLibraryEslintConfig from '../chipper/eslint/phet-library.eslint.config.mjs';

export default [
  ...phetLibraryEslintConfig,
  {
    ignores: [
      '**/**'
    ]
  }
];