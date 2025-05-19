from rest_framework import serializers
from products.serializers import ProductSerializer
from .models import Order, OrderItem, Cart, CartItem

class CartItemSerializer(serializers.ModelSerializer):
    product = ProductSerializer()
    total = serializers.SerializerMethodField()
    
    class Meta:
        model = CartItem
        fields = ['id', 'product', 'quantity', 'total']
    
    def get_total(self, obj):
        return obj.get_total()

class CartSerializer(serializers.ModelSerializer):
    items = CartItemSerializer(many=True, read_only=True)
    total = serializers.SerializerMethodField()
    
    class Meta:
        model = Cart
        fields = ['id', 'user', 'items', 'total', 'created_at', 'updated_at']
    
    def get_total(self, obj):
        return obj.get_total()

class OrderItemSerializer(serializers.ModelSerializer):
    product = ProductSerializer()
    
    class Meta:
        model = OrderItem
        fields = ['id', 'product', 'price', 'quantity']

class OrderSerializer(serializers.ModelSerializer):
    items = OrderItemSerializer(many=True, read_only=True)
    
    class Meta:
        model = Order
        fields = ['id', 'user', 'first_name', 'last_name', 'email', 
                 'address', 'postal_code', 'city', 'country', 'phone',
                 'created', 'updated', 'status', 'paid', 'total', 'items']