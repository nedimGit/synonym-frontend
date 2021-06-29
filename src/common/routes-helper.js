/**
 * Executes passed methods sequentially. In case one wants to stop execution of subsequent methods
 * return false needs to be added in the specific function.
 *
 * @param hooks Hook methods to be executed (in form: method1, method2, method3).
 */
export function composeEnterHooksSeries(...hooks) {
  return function onEnter(nextState, replace, executeTransition) {
    (function executeHooksSynchronously(remainingHooks) {
      if (!remainingHooks.length) return executeTransition();
      const nextHook = remainingHooks[0];
      if (nextHook.length >= 3) {
        nextHook.call(this, nextState, replace, proceed => {
          if (proceed === false) {
            executeHooksSynchronously([]);
          } else {
            executeHooksSynchronously(remainingHooks.slice(1));
          }
        });
      } else {
        const proceed = nextHook.call(this, nextState, replace);
        if (proceed === false) {
          executeHooksSynchronously([]);
        } else {
          executeHooksSynchronously(remainingHooks.slice(1));
        }
      }
    })(hooks);
  };
}
