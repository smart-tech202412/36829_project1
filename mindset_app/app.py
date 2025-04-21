import streamlit as st

st.title("Growth Mindset Challenge")
st.write("Welcome to the Growth Mindset App! Here, you'll learn how to embrace challenges, learn from mistakes, and grow.")

# Add a section for tips
st.header("Tips for Adopting a Growth Mindset")
st.write("1. Embrace challenges as opportunities to learn.")
st.write("2. Learn from your mistakes and improve.")
st.write("3. Celebrate effort, not just results.")

# Add an interactive quiz
st.header("Growth Mindset Quiz")
question = st.radio("What do you do when you face a challenge?", 
                    ["Avoid it", "Give up easily", "See it as a chance to learn"])
if question == "See it as a chance to learn":
    st.success("That's the spirit! You're on the right track.")
else:
    st.warning("Remember, challenges are opportunities to grow. Try again!")

# Add a reflection section
st.header("Reflect on Your Learning")
reflection = st.text_area("What have you learned today?")
if reflection:
    st.write("Great reflection! Keep growing.")