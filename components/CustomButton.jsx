import { TouchableOpacity, Text } from "react-native"

export const CustomButton = ({
    title, onPress, containerStyles, textStyles, isLoading
}) => {
    return (
        <TouchableOpacity
            className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center ${isLoading && 'opacity-50'} ${containerStyles}`}
            onPress={onPress}
            activeOpacity={0.7}
            disabled={isLoading}
        >
            <Text className={`text-primary font-psemibold text-lg ${textStyles}`}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}