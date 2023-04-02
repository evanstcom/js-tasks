class FormatError extends SyntaxError {
    constructor(message) {
      super(message);
      this.name = "FormatError";
    }
  }
  let err = new FormatError("ошибка форматирования");
  console.log( err.message ); // ошибка форматирования
  console.log(err.name )( err.name ); // FormatError
  console.log( err.stack );