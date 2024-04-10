/**
 * Get the new loading state, based on change. True is added to an
 * array every time a new piece of data is fetched. A true is removed
 * once the data has returned.
 *
 * @param prevState {boolean[]} Previous loading state
 * @param isLoading {boolean} [isLoading=true] Is loading
 * @returns An array representing how many items are currently being fetched
 *
 * @example
 * Beginning state: [] // Nothing loading
 * isLoading(prevState)
 * // returns [true]
 *
 * @example
 * Beginning state: [true] // One item loading
 * isLoading(prevState)
 * // returns [true, true]
 *
 * @example
 * Beginning state: [true, true] // Two items loading
 * isLoading(prevState, false)
 * // returns [true]
 */
export function isLoading(
    prevState: boolean[],
    isLoading: boolean = true,
): boolean[] {
    if (!isLoading) {
        return [...prevState.slice(0, -1)]
    }

    return [...prevState, true]
}
