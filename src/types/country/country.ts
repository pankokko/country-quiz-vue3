export interface Country {
  flags: {
    png: string; //小文字だとOK
    svg?: string; //「?」をつけるとオブジェクト生成時にプロパティが存在しなくてもエラーが出ない。
  };
  name: {
    common: string;
    official: string;
    nativeName: {
      spa: { official: string; common: string };
    };
  };
  capital: string[]; //配列内のデータはstring型だが長さは問わない。
  altSpellings: string[];
  population: number;
}

export type countryCapitalQuiz = {
  quizTitle: string;
  capitals: string[];
  collectAnswer: string;
};
