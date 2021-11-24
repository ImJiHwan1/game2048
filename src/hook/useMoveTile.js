import React, { useEffect } from "react"
import { addKeyObserver, removeKeyObserver } from "../util/keyboard"
import { makeTile, moveTile } from "../util/tile"

export default function useMoveTile({ tileList, setTileList }) {
    function moveAndAdd({x, y}) {
        const newTileList = moveTile({tileList, x, y})
        const newTile = makeTile(newTileList);
        newTile.isNew = true;
        newTileList.push(newTile);
        setTileList(newTileList)
    }

    function moveUp() {
        moveAndAdd({ x: 0, y: -1 })
    }
    function moveDown() {
        moveAndAdd({ x: 0, y: 1 })
    }
    function moveLeft() {
        moveAndAdd({ x: -1, y: 0 })
    }
    function moveRight() {
        moveAndAdd({ x: 1, y: 0 })
    }
    
    useEffect(() => {
        addKeyObserver('up', () => {});
        addKeyObserver('down', () => {});
        addKeyObserver('left', () => {});
        addKeyObserver('right', () => {});

        return () => {
            removeKeyObserver('up', moveUp);
            removeKeyObserver('down', moveDown);
            removeKeyObserver('left', moveLeft);
            removeKeyObserver('right', moveRight);
        }
    });
}