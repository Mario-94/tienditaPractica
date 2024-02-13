import { create } from "zustand";
import { devtools } from "zustand/middleware";

// const useStore = create(
//     (set) => ({
//         usuarios: [],
//         addUser: (usuario) => {
//             console.log(usuario); // Imprimir el usuario antes de agregarlo al estado
//             set((state) => ({
//                 usuarios: [...state.usuarios, usuario],
//             }));
//         },
//     })
// );

let store = (set) => ({
    usuarios: [],
    addUser: (usuario) =>
    (
        set((state) => (console.log(usuario),
            { usuarios: [...state.usuarios, usuario] }), false, "addUser")),
})
store = devtools(store)
// store = persist(store, { name: "zustanStorage" });

const useStore = create(store);

export default useStore;
