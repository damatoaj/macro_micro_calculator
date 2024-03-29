import { useRef, memo } from 'react'
import useForm from '../../Hooks/useForm'
const GripForm = () => {
    const { handleChange, handleSubmit, handleReset} = useForm()
    const form = useRef<HTMLFormElement | null>(null)
    let valid : boolean = false
    if (form.current && form.current !== null) {
        valid = form.current.checkValidity()
    }

    return (
        <form
            ref={form}
            onSubmit={handleSubmit}
            onReset={handleReset}
            name='gripTest'
        >
            <h2>Enter Your Top Score For Both Hands</h2>
            <fieldset>
                <legend>Grip Strength</legend>
                <label htmlFor='leftHand'>
                    Left Hand
                </label>
                    <input 
                        onChange={handleChange}
                        type='number'
                        name='leftHand'
                        min='0'
                        max='2000'
                        placeholder='Measure in Lbs'
                        autoFocus={true}
                        step={.5}
                        maxLength={6}
                    />
                <label htmlFor='rightHand'>
                    Right Hand
                </label>
                    <input 
                        onChange={handleChange}
                        type='number'
                        name='rightHand'
                        min='0'
                        max='2000'
                        placeholder='Measure in Lbs'
                        step={.5}
                        maxLength={6}
                    />
            </fieldset>
            <span>
                <button type='submit' disabled={!valid}>Submit</button>
                <button type='reset'>Reset</button>
            </span>
        </form>
    )
};

export default memo(GripForm);