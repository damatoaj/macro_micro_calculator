import {memo} from 'react';
import {Micros} from '../interfaces';
import './Table.css';

type Props = {
    micros: Micros
};

const MicrosTable = ({micros}:Props) => {
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th colSpan={3}>Fat Soluble Vitamins</th>
                    </tr>
                    <tr>
                        <th></th>
                        <th>Amount</th>
                        <th>Unit</th>
                    </tr>
                </thead>
                <tr>
                    <td>Vitamin A</td>
                    <td>{micros.vitaminA.amount}</td>
                    <td>{micros.vitaminA.unit}</td>
                </tr>
                <tr>
                    <td>Vitamin D</td>
                    <td>{micros.vitaminD.amount}</td>
                    <td>{micros.vitaminD.unit}</td>
                </tr>
                <tr>
                    <td>Vitamin E</td>
                    <td>{micros.vitaminE.amount}</td>
                    <td>{micros.vitaminE.unit}</td>
                </tr>
                <tr>
                    <td>Vitamin K</td>
                    <td>{micros.vitaminK.amount}</td>
                    <td>{micros.vitaminK.unit}</td>
                </tr>
            </table>
            <table>
                <thead>
                    <tr>
                        <th colSpan={3}>Water Soluble Vitamins</th>
                    </tr>
                    <tr>
                        <th></th>
                        <th>Amount</th>
                        <th>Unit</th>
                    </tr>
                </thead>
                <tr>
                    <td>Vitamin C</td>
                    <td>{micros.vitaminC.amount}</td>
                    <td>{micros.vitaminC.unit}</td>
                </tr>
                <tr>
                    <td>Vitamin B6</td>
                    <td>{micros.vitaminB6.amount}</td>
                    <td>{micros.vitaminB6.unit}</td>
                </tr>
                <tr>
                    <td>Vitamin B12</td>
                    <td>{micros.vitaminB12.amount}</td>
                    <td>{micros.vitaminB12.unit}</td>
                </tr>
                <tr>
                    <td>Folate</td>
                    <td>{micros.folate.amount}</td>
                    <td>{micros.folate.unit}</td>
                </tr>
                <tr>
                    <td>Riboflavin</td>
                    <td>{micros.riboflavin.amount}</td>
                    <td>{micros.riboflavin.unit}</td>
                </tr>
            </table>
            <table>
                <thead>
                    <tr>
                        <th colSpan={3}>Minerals</th>
                    </tr>
                    <tr>
                        <th></th>
                        <th>Amount</th>
                        <th>Unit</th>
                    </tr>
                </thead>
                <tr>
                    <td>Calcium</td>
                    <td>{micros.calcium.amount}</td>
                    <td>{micros.calcium.unit}</td>
                </tr>
                <tr>
                    <td>Chromium</td>
                    <td>{micros.chromium.amount}</td>
                    <td>{micros.chromium.unit}</td>
                </tr>
                <tr>
                    <td>Iodine</td>
                    <td>{micros.iodine.amount}</td>
                    <td>{micros.iodine.unit}</td>
                </tr>
                <tr>
                    <td>Iron</td>
                    <td>{micros.iron.amount}</td>
                    <td>{micros.iron.unit}</td>
                </tr>
                <tr>
                    <td>Magnesium</td>
                    <td>{micros.magnesium.amount}</td>
                    <td>{micros.magnesium.unit}</td>
                </tr>
                <tr>
                    <td>Selenium</td>
                    <td>{micros.selenium.amount}</td>
                    <td>{micros.selenium.unit}</td>
                </tr>
                <tr>
                    <td>Zinc</td>
                    <td>{micros.zinc.amount}</td>
                    <td>{micros.zinc.unit}</td>
                </tr>
            </table>
        </>
    );
};

export default memo(MicrosTable);