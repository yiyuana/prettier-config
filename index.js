module.exports = {
  /**
   * 每一行容纳的最大字符数，超过自动换行，默认为80
   */
  printWidth: 100,
  /**
   * tab缩进字节数，默认为2
   */
  tabWidth: 2,
  /**
   * 使用tab缩进，默认false
   * 开发中使用空格进行缩进会比较好点
   */
  useTabs: false,
  /**
   * 句尾添加分号，默认true
   */
  semi: true,
  /**
   * 是否使用单引号，默认false(在jsx中配置无效，默认都是双引号)
   * vue项目中，可能使用单引号会比较多，看团队规范吧~
   */
  singleQuote: false,
  /**
   * 箭头函数只有一个参数时，是否要有小括号
   * 默认avoid 可选 avoid| always
   * avoid 能省略括号的时候就省略 例如x => x
   * always 总是有括号
   */
  arrowParens: "avoid",
  /**
   * 在对象，数组括号与文字之间加空格，默认true
   * true: { foo: bar }
   * false: {foo: bar}
   */
  bracketSpacing: true,
  /**
   * JSX中闭合标签（>）的位置是否单独一行，默认false
   * 设置为true:
   * <div
   *  className=""
   * style={{}} >
   *
   * 设置为false:
   * <div
   *  className=""
   *  style={{}}
   * >
   */
  jsxBracketSameLine: false,
  /**
   * JSX中使用单引号代替双引号，默认false
   */
  jsxSingleQuote: false,
  /**
   * 行尾逗号，默认none，可选 none|es5|all
   * es5 包括es5中的数组、对象
   * all 还包括函数对象等
   */
  trailingComma: "es5",
  /**
   * 强制使用 unix 风格的换行符
   * window系统一般是crlf格式
   * linux系统一般是lf格式
   */
  endOfLine: "lf",
  // /**
  //  * 不格式化vue文件，vue文件的格式化单独设置
  //  */
  // disableLanguages: ["vue"],
  // /**
  //  * 不使用prettier格式化的文件填写在项目的.prettierignore文件中
  //  */
  // ignorePath: ".prettierignore",
  // /**
  //  * 格式化的解析器，默认是babylon
  //  */
  // parser: "babylon",
};
// 更多配置参考https://prettier.io/docs/en/options.html
