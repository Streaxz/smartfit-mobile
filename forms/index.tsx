// import React, {
//   PropsWithChildren,
//   ReactNode,
//   Reducer,
//   createContext,
//   useEffect,
//   useReducer,
//   useRef, useCallback,
// } from 'react';
//
// type TValuesStateActionTypes<T extends object> = {
//   type: 'set-value';
//   payload: {
//     label: keyof T
//     value: typeof T
//   }
// };
//
// type TValuesState<T extends object> = {
//   data: TFormValues<T>;
// };
//
// type TFormItemError = {
//   message: string;
// };
//
// type TFormValues<T extends object> = {
//   [key in keyof T]: {
//     value: T[key];
//     error?: TFormItemError[];
//   };
// };
//
// type TFormContext<T extends object> = {
//   values: TValuesState<T>['data'];
//   setFieldValue: (name: keyof T, value: T[typeof name]) => void;
// };
//
// const FormContext = createContext<TFormContext<NonNullable<unknown>>>({
//   values: {},
//   setFieldValue: () => {},
// });
//
// type TProps<T extends object> = PropsWithChildren<{
//   onFormFinish?: (values: T) => Promise<void>;
//   initialValues?: Partial<T>;
// }>;
//
// const reducer: Reducer<
//   TValuesState<NonNullable<unknown>>,
//   TValuesStateActionTypes
// > = (state, action) => {
//   switch (action.type) {
//     case '':
//       return { ...state };
//     default:
//       return state;
//   }
// };
//
// export const FormComponent: <T extends object>(
//   props: TProps<T>
// ) => ReactNode = ({ children, onFormFinish, initialValues }) => {
//   type T = Parameters<NonNullable<typeof onFormFinish>>[0]
//
//   const [valuesState, dispatch] = useReducer<typeof reducer>(reducer, {
//     data: { ...initialValues },
//   });
//
//   const setFieldValue = useCallback((key: keyof T, value: T[typeof key]) => {
//     dispatch()
//   }, [])
//
//   return (
//     <FormContext.Provider
//       value={{
//         values: valuesState.data,
//         setFieldValue: ()
//       }}
//     >
//       {children}
//     </FormContext.Provider>
//   );
// };
