from flask import Flask ,jsonify;
import pickle
popular_df = pickle.load(open('popular.pkl','rb'))

app=Flask(__name__)
@app.route('/api/data',methods=['GET'])
def get_data():
    data={
       "data1":list(popular_df['Book-Title'].values),
       "data2":list(popular_df['Book-Author'].values),
       "data3":list(popular_df['Image-URL-M'].values),
    }
    return jsonify(data)

if __name__=="__main__":
    app.run(host='0.0.0.0',debug=True)
