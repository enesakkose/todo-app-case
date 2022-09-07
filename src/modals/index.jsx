import CreateTodoModal from "@/modals/CreateTodoModal"
import DeleteTodoModal from "@/modals/DeleteTodoModal"
import EditTodoModal from "@/modals/EditTodoModal"
import CreateUserModal from "@/modals/CreateUserModal"

const modals = [
    {
        name: 'CreateTodoModal',
        element: CreateTodoModal
    },
    {
        name: 'EditTodoModal',
        element: EditTodoModal
    },
    {
        name: 'DeleteTodoModal',
        element: DeleteTodoModal
    },
    {
        name: 'CreateUserModal',
        element: CreateUserModal
    }
]

export default modals