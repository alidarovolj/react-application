const styles = {
    h2: {
        color: 'red'
    }
}

export default function test(props) {
    return ( 
        <div>
            <h2 style={styles.h2} className="text-center text-3xl font-bold">Hello World form another component!</h2>
            <div>
                { props.someProd.map(item => {
                return <p>{item.product}</p>
                })}
            </div>
        </div>
    );
}