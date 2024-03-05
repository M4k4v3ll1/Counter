import React, {ChangeEvent, FC, memo} from "react";


type InputPropsType = {
    value: number
    onClickCallback: (e: ChangeEvent<HTMLInputElement>) => void
    finalClassName: string
}
export const Input: FC<InputPropsType> = memo(({
                                              value,
                                              onClickCallback,
                                              finalClassName
                                          }) => {
    const onClickGetValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onClickCallback(e)
    }

        return (
            <input
                className={finalClassName}
                type='number'
                onChange={onClickGetValueHandler}
                value={value}
            />
        )
})