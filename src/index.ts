export const indexer = <T>(toBeIndexed: T[], indexExpression: (element: T, index: number, array: T[]) => string) => {
    return toBeIndexed.reduce(
        (acc, cur, index, array) => {
            acc[String(indexExpression(cur, index, array))] = cur;
            return acc;
        },
        {} as { [index: string]: T },
    );
};

export default indexer;
