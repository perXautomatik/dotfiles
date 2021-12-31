package schemaLib;
 
/**********************************************************************************************
 * Copyright (c) 2001-2021 Liquid Technologies Limited. All rights reserved.
 * See www.liquid-technologies.com for product details.
 *
 * Please see products End User License Agreement for distribution permissions.
 *
 * WARNING: THIS FILE IS GENERATED
 * Changes made outside of ##HAND_CODED_BLOCK_START blocks will be overwritten
 *
 * Generation  :  by Liquid XML Data Binder 19.0.9.10834
 * Using Schema: C:/Users/chris/OneDrive/Dokument/schema.xsd
 **********************************************************************************************/
	
// <summary>
// This class represents the ComplexType _x0038_127
// </summary>
public class _x0038_127 extends com.liquid_technologies.ltxmllib19.XmlGeneratedClass {
	private static final long serialVersionUID = 13L;

	// <summary>
	// 	Constructor for _x0038_127
	// </summary>
	// <remarks>
	// The class is created with all the mandatory fields populated with the
	// default data. 
	// All Collection object are created.
	// However any 1-n relationships (these are represented as collections) are
	// empty. To comply with the schema these must be populated before the xml
	// obtained from ToXml is valid against the schema C:/Users/chris/OneDrive/Dokument/schema.xsd
	// </remarks>
	public _x0038_127() {
		setElementName("_x0038_127");
		init();
	}
	public _x0038_127(String elementName) {
		setElementName(elementName);
		init();
	}		

	// <summary>
	// 	Initializes the class
	// </summary>
	// <remarks>
	// This creates all the mandatory fields (populated with the default data) 
	// All Collection object are created.
	// However any 1-n relationships (these are represented as collections) are
	// empty. To comply with the schema these must be populated before the xml
	// obtained from ToXml is valid against the schema C:/Users/chris/OneDrive/Dokument/schema.xsd.
	// </remarks>
	@Override
	protected void init() {
		try {
			schemaLib.Registration.iRegistrationIndicator = 0; // causes registration to take place
			__x0038_093 = null;
			__x0038_100 = null;
			__x0038_113 = null;
			__x0038_115 = null;
			__x0038_122 = null;
			__x0038_130 = null;
			__x0038_132 = null;
			__x0038_193 = null;

			// ##HAND_CODED_BLOCK_START ID="Additional Inits"## DO NOT MODIFY ANYTHING OUTSIDE OF THESE TAGS
			// Add Additional initialization code here...
			// ##HAND_CODED_BLOCK_END ID="Additional Inits"## DO NOT MODIFY ANYTHING OUTSIDE OF THESE TAGS

			getClassAttributeInfo();
			getClassElementInfo();
		} catch (Exception ex) {
			// should never happen
			ex.printStackTrace();
			throw new InternalError();
		}
	}



	// <summary>
	// Allows the class to be copied
	// </summary>
	// <remarks>
	// Performs a 'deep copy' of all the data in the class (and its children)
	// </remarks>
	@Override
	public Object clone() throws CloneNotSupportedException {
		try {
			schemaLib._x0038_127 newObject = (schemaLib._x0038_127)super.clone();

			// clone, creates a bitwise copy of the class, so all the collections are the
			// same as the parents. Init will re-create our own collections, and classes, 
			// preventing objects being shared between the new an original objects
			newObject.init();
			newObject.__x0038_093 = null;
			if (__x0038_093 != null)
				newObject.__x0038_093 = (schemaLib._x0038_093B)__x0038_093.clone();
			newObject.__x0038_100 = null;
			if (__x0038_100 != null)
				newObject.__x0038_100 = (schemaLib._x0038_100A)__x0038_100.clone();
			newObject.__x0038_113 = null;
			if (__x0038_113 != null)
				newObject.__x0038_113 = (schemaLib._x0038_113)__x0038_113.clone();
			newObject.__x0038_115 = null;
			if (__x0038_115 != null)
				newObject.__x0038_115 = (schemaLib._x0038_115)__x0038_115.clone();
			newObject.__x0038_122 = null;
			if (__x0038_122 != null)
				newObject.__x0038_122 = (schemaLib._x0038_122)__x0038_122.clone();
			newObject.__x0038_130 = null;
			if (__x0038_130 != null)
				newObject.__x0038_130 = (schemaLib._x0038_130)__x0038_130.clone();
			newObject.__x0038_132 = null;
			if (__x0038_132 != null)
				newObject.__x0038_132 = (schemaLib._x0038_132)__x0038_132.clone();
			newObject.__x0038_193 = null;
			if (__x0038_193 != null)
				newObject.__x0038_193 = (schemaLib._x0038_193)__x0038_193.clone();
	
// ##HAND_CODED_BLOCK_START ID="Additional clone"## DO NOT MODIFY ANYTHING OUTSIDE OF THESE TAGS

// Add Additional clone code here...

// ##HAND_CODED_BLOCK_END ID="Additional clone"## DO NOT MODIFY ANYTHING OUTSIDE OF THESE TAGS

			return newObject;
		} catch (CloneNotSupportedException e) {
			// should never happen
			e.printStackTrace();
			throw new InternalError();
		}
	}

	@Override
	public String getTargetNamespace() {
		return "";
	}

	// <summary>
	// Represents an optional Element in the XML document
	// </summary>
	// <remarks>
	// This property is represented as an Element in the XML.
	// It is optional, initially it is null.

	// </remarks>
	public schemaLib._x0038_093B get_x0038_093() {
		return __x0038_093;  
	}
	public void set_x0038_093(schemaLib._x0038_093B value) throws com.liquid_technologies.ltxmllib19.exceptions.LtException { 
		if (value == null)
			__x0038_093 = null;
		else {
			setElementName(value.getBase(), "_x0038_093");
			__x0038_093 = value; 
		}
	}
	protected schemaLib._x0038_093B __x0038_093;

	// <summary>
	// Represents an optional Element in the XML document
	// </summary>
	// <remarks>
	// This property is represented as an Element in the XML.
	// It is optional, initially it is null.

	// </remarks>
	public schemaLib._x0038_100A get_x0038_100() {
		return __x0038_100;  
	}
	public void set_x0038_100(schemaLib._x0038_100A value) throws com.liquid_technologies.ltxmllib19.exceptions.LtException { 
		if (value == null)
			__x0038_100 = null;
		else {
			setElementName(value.getBase(), "_x0038_100");
			__x0038_100 = value; 
		}
	}
	protected schemaLib._x0038_100A __x0038_100;

	// <summary>
	// Represents an optional Element in the XML document
	// </summary>
	// <remarks>
	// This property is represented as an Element in the XML.
	// It is optional, initially it is null.

	// </remarks>
	public schemaLib._x0038_113 get_x0038_113() {
		return __x0038_113;  
	}
	public void set_x0038_113(schemaLib._x0038_113 value) throws com.liquid_technologies.ltxmllib19.exceptions.LtException { 
		if (value == null)
			__x0038_113 = null;
		else {
			setElementName(value.getBase(), "_x0038_113");
			__x0038_113 = value; 
		}
	}
	protected schemaLib._x0038_113 __x0038_113;

	// <summary>
	// Represents an optional Element in the XML document
	// </summary>
	// <remarks>
	// This property is represented as an Element in the XML.
	// It is optional, initially it is null.

	// </remarks>
	public schemaLib._x0038_115 get_x0038_115() {
		return __x0038_115;  
	}
	public void set_x0038_115(schemaLib._x0038_115 value) throws com.liquid_technologies.ltxmllib19.exceptions.LtException { 
		if (value == null)
			__x0038_115 = null;
		else {
			setElementName(value.getBase(), "_x0038_115");
			__x0038_115 = value; 
		}
	}
	protected schemaLib._x0038_115 __x0038_115;

	// <summary>
	// Represents an optional Element in the XML document
	// </summary>
	// <remarks>
	// This property is represented as an Element in the XML.
	// It is optional, initially it is null.

	// </remarks>
	public schemaLib._x0038_122 get_x0038_122() {
		return __x0038_122;  
	}
	public void set_x0038_122(schemaLib._x0038_122 value) throws com.liquid_technologies.ltxmllib19.exceptions.LtException { 
		if (value == null)
			__x0038_122 = null;
		else {
			setElementName(value.getBase(), "_x0038_122");
			__x0038_122 = value; 
		}
	}
	protected schemaLib._x0038_122 __x0038_122;

	// <summary>
	// Represents an optional Element in the XML document
	// </summary>
	// <remarks>
	// This property is represented as an Element in the XML.
	// It is optional, initially it is null.

	// </remarks>
	public schemaLib._x0038_130 get_x0038_130() {
		return __x0038_130;  
	}
	public void set_x0038_130(schemaLib._x0038_130 value) throws com.liquid_technologies.ltxmllib19.exceptions.LtException { 
		if (value == null)
			__x0038_130 = null;
		else {
			setElementName(value.getBase(), "_x0038_130");
			__x0038_130 = value; 
		}
	}
	protected schemaLib._x0038_130 __x0038_130;

	// <summary>
	// Represents an optional Element in the XML document
	// </summary>
	// <remarks>
	// This property is represented as an Element in the XML.
	// It is optional, initially it is null.

	// </remarks>
	public schemaLib._x0038_132 get_x0038_132() {
		return __x0038_132;  
	}
	public void set_x0038_132(schemaLib._x0038_132 value) throws com.liquid_technologies.ltxmllib19.exceptions.LtException { 
		if (value == null)
			__x0038_132 = null;
		else {
			setElementName(value.getBase(), "_x0038_132");
			__x0038_132 = value; 
		}
	}
	protected schemaLib._x0038_132 __x0038_132;

	// <summary>
	// Represents an optional Element in the XML document
	// </summary>
	// <remarks>
	// This property is represented as an Element in the XML.
	// It is optional, initially it is null.

	// </remarks>
	public schemaLib._x0038_193 get_x0038_193() {
		return __x0038_193;  
	}
	public void set_x0038_193(schemaLib._x0038_193 value) throws com.liquid_technologies.ltxmllib19.exceptions.LtException { 
		if (value == null)
			__x0038_193 = null;
		else {
			setElementName(value.getBase(), "_x0038_193");
			__x0038_193 = value; 
		}
	}
	protected schemaLib._x0038_193 __x0038_193;

	@Override
	public String getNamespace() {
		return "";
	}	

	@Override
	public com.liquid_technologies.ltxmllib19.XmlObjectBase getBase() {
		return this;
	}
	protected void onEvent(com.liquid_technologies.ltxmllib19.XmlObjectBase msgSource, int msgType, Object data) {
		if (msgType == CollectionChangeEvent) {
		}
	}

	private static com.liquid_technologies.ltxmllib19.ParentElementInfo __parentElementInfo = null;
	private static com.liquid_technologies.ltxmllib19.ElementInfo[] __elementInfo = null;
	private static com.liquid_technologies.ltxmllib19.AttributeInfo[] __attributeInfo = null;
		
	protected com.liquid_technologies.ltxmllib19.ParentElementInfo getClassInfo() throws Exception {
		if (__parentElementInfo == null) {
			__parentElementInfo = new com.liquid_technologies.ltxmllib19.ParentElementInfo(	
																	com.liquid_technologies.ltxmllib19.XmlObjectBase.XmlElementGroupType.SEQUENCE,
																	com.liquid_technologies.ltxmllib19.XmlObjectBase.XmlElementType.ELEMENT, "_x0038_127", "", true, false,
																	null, null, com.liquid_technologies.ltxmllib19.Conversions.ConversionType.TYPE_NONE, com.liquid_technologies.ltxmllib19.WhitespaceRule.NONE, null, false);
		}
		return __parentElementInfo;
	}

	protected com.liquid_technologies.ltxmllib19.ElementInfo[] getClassElementInfo() throws Exception {
		if (__elementInfo == null) {
			__elementInfo = new com.liquid_technologies.ltxmllib19.ElementInfo[] {
				 new com.liquid_technologies.ltxmllib19.data.ElementInfoSeqClsOpt("_x0038_093", "", findGetterMethod("schemaLib._x0038_127", "get_x0038_093"), findSetterMethod("schemaLib._x0038_127", "set_x0038_093", "schemaLib._x0038_093B"), com.liquid_technologies.ltxmllib19.XmlObjectBase.XmlElementType.ELEMENT, schemaLib._x0038_093B.class)
				,new com.liquid_technologies.ltxmllib19.data.ElementInfoSeqClsOpt("_x0038_100", "", findGetterMethod("schemaLib._x0038_127", "get_x0038_100"), findSetterMethod("schemaLib._x0038_127", "set_x0038_100", "schemaLib._x0038_100A"), com.liquid_technologies.ltxmllib19.XmlObjectBase.XmlElementType.ELEMENT, schemaLib._x0038_100A.class)
				,new com.liquid_technologies.ltxmllib19.data.ElementInfoSeqClsOpt("_x0038_113", "", findGetterMethod("schemaLib._x0038_127", "get_x0038_113"), findSetterMethod("schemaLib._x0038_127", "set_x0038_113", "schemaLib._x0038_113"), com.liquid_technologies.ltxmllib19.XmlObjectBase.XmlElementType.ELEMENT, schemaLib._x0038_113.class)
				,new com.liquid_technologies.ltxmllib19.data.ElementInfoSeqClsOpt("_x0038_115", "", findGetterMethod("schemaLib._x0038_127", "get_x0038_115"), findSetterMethod("schemaLib._x0038_127", "set_x0038_115", "schemaLib._x0038_115"), com.liquid_technologies.ltxmllib19.XmlObjectBase.XmlElementType.ELEMENT, schemaLib._x0038_115.class)
				,new com.liquid_technologies.ltxmllib19.data.ElementInfoSeqClsOpt("_x0038_122", "", findGetterMethod("schemaLib._x0038_127", "get_x0038_122"), findSetterMethod("schemaLib._x0038_127", "set_x0038_122", "schemaLib._x0038_122"), com.liquid_technologies.ltxmllib19.XmlObjectBase.XmlElementType.ELEMENT, schemaLib._x0038_122.class)
				,new com.liquid_technologies.ltxmllib19.data.ElementInfoSeqClsOpt("_x0038_130", "", findGetterMethod("schemaLib._x0038_127", "get_x0038_130"), findSetterMethod("schemaLib._x0038_127", "set_x0038_130", "schemaLib._x0038_130"), com.liquid_technologies.ltxmllib19.XmlObjectBase.XmlElementType.ELEMENT, schemaLib._x0038_130.class)
				,new com.liquid_technologies.ltxmllib19.data.ElementInfoSeqClsOpt("_x0038_132", "", findGetterMethod("schemaLib._x0038_127", "get_x0038_132"), findSetterMethod("schemaLib._x0038_127", "set_x0038_132", "schemaLib._x0038_132"), com.liquid_technologies.ltxmllib19.XmlObjectBase.XmlElementType.ELEMENT, schemaLib._x0038_132.class)
				,new com.liquid_technologies.ltxmllib19.data.ElementInfoSeqClsOpt("_x0038_193", "", findGetterMethod("schemaLib._x0038_127", "get_x0038_193"), findSetterMethod("schemaLib._x0038_127", "set_x0038_193", "schemaLib._x0038_193"), com.liquid_technologies.ltxmllib19.XmlObjectBase.XmlElementType.ELEMENT, schemaLib._x0038_193.class)
			};
		}
		return __elementInfo;
	}

	protected com.liquid_technologies.ltxmllib19.AttributeInfo[] getClassAttributeInfo() throws Exception {
		if (__attributeInfo==null) {
			__attributeInfo = new com.liquid_technologies.ltxmllib19.AttributeInfo[] {
			};
		}
		return __attributeInfo;
	}

// ##HAND_CODED_BLOCK_START ID="Additional Methods"## DO NOT MODIFY ANYTHING OUTSIDE OF THESE TAGS

// Add Additional Methods and members here...

// ##HAND_CODED_BLOCK_END ID="Additional Methods"## DO NOT MODIFY ANYTHING OUTSIDE OF THESE TAGS
}


