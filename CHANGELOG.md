# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="1.3.1"></a>
## [1.3.1](https://github.com/iarna/rtf-parser/compare/v1.3.0...v1.3.1) (2019-01-08)


### Bug Fixes

* **interpreter:** avoid finish callback after err ([#14](https://github.com/iarna/rtf-parser/issues/14)) ([2882b17](https://github.com/iarna/rtf-parser/commit/2882b17)), closes [#13](https://github.com/iarna/rtf-parser/issues/13)
* **interpreter:** Unknown RTF command error ([#16](https://github.com/iarna/rtf-parser/issues/16)) ([63314fe](https://github.com/iarna/rtf-parser/commit/63314fe)), closes [#13](https://github.com/iarna/rtf-parser/issues/13)



<a name="1.3.0"></a>
# [1.3.0](https://github.com/iarna/rtf-parser/compare/v1.2.0...v1.3.0) (2018-07-08)


### Bug Fixes

* **nulls:** If a file is null terminated, don't emit the null ([7eee9a2](https://github.com/iarna/rtf-parser/commit/7eee9a2)), closes [#5](https://github.com/iarna/rtf-parser/issues/5)


### Features

* **fragments:** Add RTF fragment support ([a3fb225](https://github.com/iarna/rtf-parser/commit/a3fb225)), closes [#8](https://github.com/iarna/rtf-parser/issues/8)
* **line:** Add support for rtf \line command ([1ebda17](https://github.com/iarna/rtf-parser/commit/1ebda17)), closes [#9](https://github.com/iarna/rtf-parser/issues/9)



<a name="1.2.0"></a>
# [1.2.0](https://github.com/iarna/rtf-parser/compare/v1.1.0...v1.2.0) (2018-07-07)


### Bug Fixes

* **unicode:** Allow for interpretation of signed integers ([e27780e](https://github.com/iarna/rtf-parser/commit/e27780e)), closes [#12](https://github.com/iarna/rtf-parser/issues/12)


### Features

* **cp932:** Add support for code page 932 ([#11](https://github.com/iarna/rtf-parser/issues/11)) ([8dc793f](https://github.com/iarna/rtf-parser/commit/8dc793f))
* **fonttbl:** support groups in fonttbl ([#10](https://github.com/iarna/rtf-parser/issues/10)) ([b6c0f37](https://github.com/iarna/rtf-parser/commit/b6c0f37))
