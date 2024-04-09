export function delayForDemo<T>(promise: Promise<T>): Promise<T> {
    return new Promise((resolve) => {
        setTimeout(resolve, 800);
    }).then(() => promise);
}
