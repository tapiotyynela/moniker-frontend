export type LoginData = {
    email: string;
    password: string;
}

export type Search = {
    word: string;
}

export type User = {
    userId: number;
    email: string;
    firstName: string;
    lastName: string;
    nickName: string;
    gamesPlayed?: number;
    wordsSkipped?: number;
    wordsExplained?: number;
    averagePerTurn?: number;
}