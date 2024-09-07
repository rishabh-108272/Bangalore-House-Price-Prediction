import streamlit as st
import util


util.load_saved_artifacts()


st.title('Home Price Prediction')

def main():
   
    st.header('Enter the details:')

    
    
    total_sqft = st.number_input('Total Square Feet', min_value=0.0)
    bhk = st.selectbox('BHK', [1, 2, 3, 4, 5])
    bath = st.selectbox('Bathrooms', [1, 2, 3, 4])
    location = st.selectbox('Select Location', util.get_location_names())

    
    if st.button('Predict Home Price'):
       
        estimated_price = util.get_estimated_price(location.lower(), total_sqft, bhk, bath)
    
        
        st.success(f'Estimated Home Price: {estimated_price} Lakh')

if __name__ == "__main__":
    main()
