import {messageApi} from "../../utils/api";

const actions = {
    setMessages: items => ({
        type: 'MESSAGES:SET_ITEMS',
        payload: items
    }),
    fetchMessages: (dialogId) => dispatch => {
        messageApi.getAllByDialogId(dialogId).then(({data}) => {
            dispatch(actions.setMessages(data));
        });
    }
}
export default actions;