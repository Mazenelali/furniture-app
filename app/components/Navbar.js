import { Text, View } from "react-native";

const Navbar = () => {
    return (
        <View>
            <Button
                title="Go to Home"
                onPress={() => navigation.navigate("Home")}
            />
            <Button
                title="Go to Shop"
                onPress={() => navigation.navigate("Shop")}
            />
        </View>
    );
};
export default Navbar;
