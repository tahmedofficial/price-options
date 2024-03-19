import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {


    const priceOptions = [
        {
            "id": 1,
            "name": "Basic Membership",
            "price": 29.99,
            "features": [
                "Access to cardio area",
                "Access to weightlifting area",
                "Locker usage"
            ]
        },
        {
            "id": 2,
            "name": "Standard Membership",
            "price": 49.99,
            "features": [
                "Access to all basic features",
                "Access to group fitness classes",
                "Access to group fitness classes",
                "Sauna and steam room access"
            ]
        },
        {
            "id": 3,
            "name": "Premium Membership",
            "price": 79.99,
            "features": [
                "Access to all standard features",
                "Personal trainer sessions (2 per month)",
                "Personal trainer sessions (2 per month)",
                "Personal trainer sessions (2 per month)",
                "Nutritional counseling"
            ]
        }
    ]



    return (
        <div>
            <h2>Bestj price in the town</h2>
            <div className="grid md:grid-cols-3 gap-6">
                {
                    priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
            </div>
        </div>
    );
};

export default PriceOptions;