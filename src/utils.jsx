import { store } from "@/store";
import { openModal, closeModal } from "@/store/modal";

export const openModalHandle = (name) => {
    store.dispatch(openModal(name))
}

export const closeModalHandle = () => {
    store.dispatch(closeModal())
}

export const createTodoModal = (user) => {
    openModalHandle({
        name: user ? 'CreateTodoModal' : 'CreateUserModal'
    })
}