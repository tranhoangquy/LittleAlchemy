import React, { useState, useEffect } from 'react';
import '../App.css';
import { useDrop } from 'react-dnd';
import { ItemTypes } from './ItemTypes';
import { Box } from './Box';
import update from 'immutability-helper';
import img01 from "../img/iconAir.png";
import img02 from "../img/iconEarth.png";
import img03 from "../img/iconFire.png";
import img04 from "../img/iconWater.png";
import img05 from "../img/iconSea.png";
import img06 from "../img/iconLava.png";
import img07 from "../img/iconMud.png";
import img08 from "../img/iconOcean.png";
import img09 from "../img/iconSteam.png";
import { Icon } from './Icon';

const styles = {
    width: '100%',
    backgroundImage: 'url(https://littlealchemy.com/img/workspace-background.png) ',
    position: "relative",

};
export const Container = ({ hideSourceOnDrag }) => {
    const alphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X'];
    const listAlpha = alphabets.map((alphabet) =>
        <li key={alphabet} style={{ paddingBottom: "5px", color: "#938671", borderLeft: "3px solid white" }}>{alphabet}</li>
    );
    const [boxdroped, setBoxdroped] = useState([]);
    const [boxes, setBoxes] = useState([
        { top: 10, left: 20, src: img01, key: 1, name: "air" },
        { top: 60, left: 20, src: img02, key: 2, name: "earht" },
        { top: 120, left: 20, src: img03, key: 3, name: "fire" },
        { top: 180, left: 20, src: img04, key: 4, name: "warter" },
    ]);

    const [, drop] = useDrop({
        accept: ItemTypes.BOX,
        drop(item, monitor) {
            const delta = monitor.getDifferenceFromInitialOffset();
            const left = Math.round(item.left + delta.x - 187.688);
            const top = Math.round(item.top + delta.y);
            moveBox(item.id, left, top, item.src, item.name, item.key);
            return undefined;
        },
    });

    const moveBox = (id, left, top, src, name, key, topdefault, leftdefault) => {
        setBoxdroped(update(boxdroped, { $push: [{ left, top, src, name, key }] },))

        if (src === img04) {
            for (let i = 0; i < boxdroped.length; i++) {
                if (boxdroped[i].src === img04 && (boxdroped[i].top - top) <= 0 && (boxdroped[i].left - left) <= 20) {
                    setBoxdroped(update(boxdroped, { $push: [{ top, left, src: img05, name: "Sea", key }], $splice: [[i, 1]] }));
                    setBoxes(update(boxes, { $push: [{ top: 240, left: 20, src: img05, name: "Sea", key }] }));
                }
            }
        }
        if (src === img02) {
            for (let i = 0; i < boxdroped.length; i++) {
                if (boxdroped[i].src === img03 && (boxdroped[i].top - top) <= 0 && (boxdroped[i].left - left) <= 20) {
                    setBoxdroped(update(boxdroped, { $push: [{ top, left, src: img06, name: "Lava", key }], $splice: [[i, 1]] }));
                    setBoxes(update(boxes, { $push: [{ top: 300, left: 20, src: img06, name: "Lava", key }] }));
                }
            }
        }
        if (src === img03) {
            for (let i = 0; i < boxdroped.length; i++) {
                if (boxdroped[i].src === img02 && (boxdroped[i].top - top) <= 0 && (boxdroped[i].left - left) <= 20) {
                    setBoxdroped(update(boxdroped, { $push: [{ top, left, src: img06, name: "Lava", key }], $splice: [[i, 1]] }));
                    setBoxes(update(boxes, { $push: [{ top: 300, left: 20, src: img06, name: "Lava", key }] }));
                }
            }
        }
        if (src === img05) {
            for (let i = 0; i < boxdroped.length; i++) {
                if (boxdroped[i].src === img05 && (boxdroped[i].top - top) <= 0 && (boxdroped[i].left - left) <= 20) {
                    setBoxdroped(update(boxdroped, { $push: [{ top, left, src: img08, name: "Ocean", key }], $splice: [[i, 1]] }));
                    setBoxes(update(boxes, { $push: [{ top: 360, left: 20, src: img08, name: "Ocean", key }] }));
                }
            }
        }
        if (src === img02) {
            for (let i = 0; i < boxdroped.length; i++) {
                if (boxdroped[i].src === img04 && (boxdroped[i].top - top) <= 0 && (boxdroped[i].left - left) <= 20) {
                    setBoxdroped(update(boxdroped, { $push: [{ top, left, src: img07, name: "Mud", key }], $splice: [[i, 1]] }));
                }
            }
        }
        if (src === img04) {
            for (let i = 0; i < boxdroped.length; i++) {
                if (boxdroped[i].src === img02 && (boxdroped[i].top - top) <= 0 && (boxdroped[i].left - left) <= 20) {
                    setBoxdroped(update(boxdroped, { $push: [{ top, left, src: img07, name: "Mud", key }], $splice: [[i, 1]] }));
                }
            }
        }
        if (src === img03) {
            for (let i = 0; i < boxdroped.length; i++) {
                if (boxdroped[i].src === img04 && (boxdroped[i].top - top) <= 0 && (boxdroped[i].left - left) <= 20) {
                    setBoxdroped(update(boxdroped, { $push: [{ top, left, src: img09, name: "Steam", key }], $splice: [[i, 1]] }));
                }
            }
        }
        if (src === img04) {
            for (let i = 0; i < boxdroped.length; i++) {
                if (boxdroped[i].src === img03 && (boxdroped[i].top - top) <= 0 && (boxdroped[i].left - left) <= 20) {
                    setBoxdroped(update(boxdroped, { $push: [{ top, left, src: img09, name: "Steam", key }], $splice: [[i, 1]] }));
                }

            }
        }
    };
    return (
        <>
            <div className="side" >
                <div>
                    {boxes.map((e) => {
                        return (<Box key={e.key} id={e.key} left={e.left} top={e.top} src={e.src} name={e.name} className="element"  >
                            <img src={e.src} style={{ backgroundColor: "none", height: "60px" }} alt={e.name} />
                            <div className="element">{e.name}</div>
                        </Box>);
                    })}
                </div>
                <div className="alphabet" id="alphabet" style={{ float: 'right', paddingRight: "8px" }}>
                    <ul style={{ listStyle: 'none', paddingBottom: "5px", margin: 0 }} >{listAlpha}</ul>
                </div>
            </div>
            <div ref={drop} style={{ ...styles, position: 'relative' }} >
                {boxdroped.map((box) => {
                    return (
                        <Icon style={{ position: 'absolute', }} left={box.left} top={box.top}>
                            <img src={box.src} style={{ backgroundColor: "none", height: "60px" }} alt={box.name} />
                            <div className="elementName">{box.name}</div>
                        </Icon>

                    );
                })
                }
            </div>
            <div className="icons" id="icons">

                <div className="icon iconSMenu" id="menu" src="../img/iconMenu.png"></div>
            </div>
        </>
    );
};
