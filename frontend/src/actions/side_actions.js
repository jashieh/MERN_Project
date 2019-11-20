

export const OPEN_SIDE = "OPEN_SIDE";
export const CLOSE_SIDE = "CLOSE_SIDE";
export const HOVER_MASTER_LIST = "HOVER_MASTER_LIST";

export const openSide = side => ({
    type: OPEN_SIDE,
    side
});

export const closeSide = () => ({
    type: CLOSE_SIDE
});

export const hoverMasterList = master_list => ({
    type: HOVER_MASTER_LIST,
    master_list
});
